import get from 'lodash.get';

// originalData -> array
export function normalizeUserData(originalData) {
    return originalData.map(res => {
        const salutation = get(res, 'name.title', 'Mr')
        const firstName = get(res, 'name.first', '')
        const lastName = get(res, 'name.last', '')
        const email = get(res, 'email', '-')
        const username = get(res, 'login.username', '-')
        const gender = get(res, 'gender', '-')
        const registeredDate = get(res, 'registered.date', '-')

        return {
            username,
            email,
            gender,
            registeredDate,
            name: `${salutation} ${firstName} ${lastName}`,
        }
    })
}