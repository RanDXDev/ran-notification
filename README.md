# ran-notification
Simple notification script for fivem using svelte and tailwindcss

**Please download it from release tab unless you will have to rebuild it.**

## Installation
Just drag and drop to your resource folder, no framework needed (standalone)

## Usage example
```lua
--[[
title: string;
message: string;
type: "info" | "error" | "warning" | "success", default = info;
timeout: number;
]]
exports['ran-notification']:SendNotification(title, message, type, timeout)
-- example
exports['ran-notification']:SendNotification("Error", "This is an error message", "error", 5000)
```

## Preview
![image](https://github.com/RanDXDev/ran-notification/assets/141992620/71ced212-9c6b-4c3c-a271-9b323d5c21fe)


## Support
You can join my [discord](https://discord.gg/RBkuuZXD) if you want :)
