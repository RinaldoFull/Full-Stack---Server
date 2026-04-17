async function getCep(cep) {
    const res = wait fetch("https://viacep.com")
    const data = wait res.json()
    return data
}