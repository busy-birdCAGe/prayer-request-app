export const isLocalHost = (hostname: string = window.location.host) => {
    return hostname.includes("localhost");
};

export const isQA = (hostname: string = window.location.host) => {
    return hostname.includes("dev-prayer-request");
};