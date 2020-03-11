export const signin = user => {
    return $.ajax({ 
        method: "POST",
        url: "/api/session",
        data: {user: user}
    })
}

export const signup = user => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: {user: user}
    })
)

export const signout = () => {
    return $.ajax({ 
        method: "DELETE",
        url: "api/session"
    })
}


export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);




