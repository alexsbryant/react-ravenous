const apiKey = "0lxE_q_8QNCuXxpJ7uGOMQjdCjWxZe73OOyLpejPJWgQgThHThA_jntOH972qctZ98V7XYAz2wk_Ng-5yomuOGah75A3QPEWGsC15zEFJM4QwTQxeEyDux7Q1jV4Z3Yx";

const Yelp = {
    search(searchTerm, location, sortBy) {
        return fetch(
          `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortBy}`,
            {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }));
                }
            });
    },
};

export default Yelp;

/*

App Name codecademy-ravenous

Client ID
8fE5EJG5AGfpgoilE5A0-w


API Key
0lxE_q_8QNCuXxpJ7uGOMQjdCjWxZe73OOyLpejPJWgQgThHThA_jntOH972qctZ98V7XYAz2wk_Ng-5yomuOGah75A3QPEWGsC15zEFJM4QwTQxeEyDux7Q1jV4Z3Yx

*/