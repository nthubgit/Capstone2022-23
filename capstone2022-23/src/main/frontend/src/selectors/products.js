//Get visible expenses (filter)

export default (products, { text, sortBy, category }) => {
    return products.filter((product) => {
        // const createdAtMoment = moment(expense.createdAt);
        // const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        // const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        const textMatch = product.title.toLowerCase().includes(text.toLowerCase());
        const categoryMatch = product.category.toLowerCase().includes(category.toLowerCase());

        return textMatch && categoryMatch;
    }).sort((a, b) => {
        if (sortBy === 'price') {
            return a.price < b.price ? 1 : -1
        } else if (sortBy == 'rating') {
            return a.rating < b.rating ? 1 : -1
        }
        else if (sortBy == 'price_low') {
            return a.price > b.price ? 1 : -1
        }
        else if (sortBy == 'rating_low') {
            return a.rating > b.rating ? 1 : -1
        }
    });
};