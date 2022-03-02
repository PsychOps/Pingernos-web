var windowObjectReference;
var windowFeatures = "popup";

function openDiscordPopup() {
    windowObjectReference = window.open("https://discord.gg/QMhvHuGPMx", "CNN_WindowName", windowFeatures);
    window.close();
}

function openInvitePopup() {
    windowObjectReference = window.open("https://discord.com/api/oauth2/authorize?client_id=889197952994791434&permissions=274878286848&scope=bot", "CNN_WindowName", windowFeatures);
    window.close();
}