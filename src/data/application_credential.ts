import { HomeAssistant } from "../types";

export interface ApplicationCredentialsConfig {
  domains: string[];
}

export interface ApplicationCredential {
  id: string;
  domain: string;
  client_id: string;
  client_secret: string;
  name: string;
}

export const fetchApplicationCredentialsConfig = async (hass: HomeAssistant) =>
  hass.callWS<ApplicationCredentialsConfig>({
    type: "application_credentials/config",
  });

export const fetchApplicationCredentials = async (hass: HomeAssistant) =>
  hass.callWS<ApplicationCredential[]>({
    type: "application_credentials/list",
  });

export const createApplicationCredential = async (
  hass: HomeAssistant,
  domain: string,
  clientId: string,
  clientSecret: string,
  name?: string
) =>
  hass.callWS<ApplicationCredential>({
    type: "application_credentials/create",
    domain,
    client_id: clientId,
    client_secret: clientSecret,
    name,
  });

export const deleteApplicationCredential = async (
  hass: HomeAssistant,
  applicationCredentialsId: string
) =>
  hass.callWS<void>({
    type: "application_credentials/delete",
    application_credentials_id: applicationCredentialsId,
  });
