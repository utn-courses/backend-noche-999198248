const BASE_API = "http://localhost:50000/auth"

const login = async (credentials) => {
  const res = await fetch(`${BASE_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  return res
}

const register = async (userData) => {
  console.log(userData, "data al backend")
  const res = await fetch(`${BASE_API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })

  return res
}

export { login, register }