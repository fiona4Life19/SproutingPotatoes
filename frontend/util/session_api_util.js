export const signin = user => (
    $.ajax({ 
        method: "POST",
        url: "/api/session",
        data: {user: user}
    })
)

export const signup = user => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: {user: user}
    })
)

export const signout = () => (
    $.ajax({ 
        method: "DELETE",
        url: "api/session"
    })
)


export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

