export const validateName = (name) => {
    const regex = /^\S{3,6}$/

    return regex.test(name)
}

export const validateNameMessage = 'The name must be between 3 and 6 characters without spaces.'