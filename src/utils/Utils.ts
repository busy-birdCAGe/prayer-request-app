export const isLocalHost = (hostname: string = window.location.host) => {
    return hostname.includes("localhost");
};