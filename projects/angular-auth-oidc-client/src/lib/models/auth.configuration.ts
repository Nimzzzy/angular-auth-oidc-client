export interface OpenIdConfiguration {
    stsServer: string;
    customConfigServer?: string;
    redirectUrl?: string;
    clientId?: string;
    responseType?: string;
    scope?: string;
    hdParam?: string;
    postLogoutRedirectUri?: string;
    startCheckSession?: boolean;
    silentRenew?: boolean;
    silentRenewUrl?: string;
    silentRenewOffsetInSeconds?: number;
    useRefreshToken?: boolean;
    ignoreNonceAfterRefresh?: boolean;
    postLoginRoute?: string;
    forbiddenRoute?: string;
    unauthorizedRoute?: string;
    autoUserinfo?: boolean;
    autoCleanStateAfterAuthentication?: boolean;
    triggerAuthorizationResultEvent?: boolean;
    logConsoleWarningActive?: boolean;
    logConsoleDebugActive?: boolean;
    issValidationOff?: boolean;
    historyCleanupOff?: boolean;
    maxIdTokenIatOffsetAllowedInSeconds?: number;
    isauthorizedRaceTimeoutInSeconds?: number;
    disableIatOffsetValidation?: boolean;
    storage?: any;
}
