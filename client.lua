local function SendNotification(title, message, type, timeout)
    if (not title and not message) then
        warn("You need to provide title or description, you can't leave both of it empty")
        return
    end
    SendNUIMessage({
        action = "send-notify",
        data = {
            title = title,
            message = message,
            type = type,
            timeout = timeout
        }
    })
end

exports("Notify", SendNotification)


RegisterCommand("test-notification", function()
    SendNotification("Success", "This is a success message", "success", 5000)
    Wait(1000)
    SendNotification("Error", "This is an error message", "error", 5000)
    Wait(1000)
    SendNotification("Warning", "This is a warning message", "warning", 5000)
    Wait(1000)
    SendNotification("Info", "This is an info message", "info", 5000)
end, false)
