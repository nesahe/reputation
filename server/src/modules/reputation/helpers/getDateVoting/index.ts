export const getDateVoting = () => {
    const fullDate = new Date();

    const dateReverse = fullDate.toISOString().split('T')[0].split('-');

    let normalDate = '';

    for (let i = dateReverse.length - 1; i >= 0; i--) {
        normalDate += i !== 0 ? dateReverse[i] + '.' : dateReverse[i]
    }

    return normalDate
}