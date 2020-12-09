export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignup = (history) => {
    history.push('/signup')
}

export const goToHome = (history) => {
    history.push('/home')
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToCart = (history) => {
    history.push('/cart')
}

export const goToProfile = (history) => {
    history.push('/profile')
}