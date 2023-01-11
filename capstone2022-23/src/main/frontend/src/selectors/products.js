//Get visible expenses (filter)

export default (products, { text, sortBy }) => {
    return products.filter((product) => {
        // const createdAtMoment = moment(expense.createdAt);
        // const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        // const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        const textMatch = product.title.toLowerCase().includes(text.toLowerCase())

        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'price') {
            return a.price < b.price ? 1 : -1
        } else if (sortBy == 'rating') {
            return a.rating < b.rating ? 1 : -1
        }
    });
};