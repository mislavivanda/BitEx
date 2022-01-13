import { parseBlogDate, parseDate } from "../helpers";

//helper method that calls contentful API
async function fetchGraphQLContentfulData(query, variables) {
  //with no preview option
  return fetch(
    //za koristenje env van servera(api direktorija)
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response.errors);
      if (response.errors) {
        throw new Error(response.errors[0].message);
      } else return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export async function getBlogPosts(limit) {
  //OBJAŠNJENJE KORIŠTE INLINE FRAGENTA ZA DOHVAT AUTORA If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type. It's easiest to see with an example:
  //AUTOR IMPLEMENTIRA ENTRIES INTERFACE TAKO DA BEZ INLINE FRAGENTA MOŽEO SAMO QUERYAT PRPERTYE OD ENTRY MODLEA A NE OD AUTORA
  try {
    var blogPosts = await fetchGraphQLContentfulData(
      `query{
                blogPostCollection(order: date_DESC, preview:false ${
                  limit ? `limit:${limit}` : ""
                }) {
                items {
                    title
                    slug
                    date
                    tags
                    blogPicture{
                      url
                    }
                    body{
                      json
                    }
                    author{
                    ...on Author { 
                          name
                          surname
                        }
                    }
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return blogPosts.data.blogPostCollection.items.map((blogPost) => ({
    title: blogPost.title,
    slug: blogPost.slug,
    date: parseBlogDate(new Date(blogPost.date)),
    blogPictureUrl: blogPost.blogPicture.url,
    articleBody: blogPost.body.json.content, //ARRAY OF PARAGRAPHS
    tags: blogPost.tags,
    author: {
      name: blogPost.author.name,
      surname: blogPost.author.surname,
    },
  }));
}

export async function getBlogPost(slug) {
  try {
    var blogPost = await fetchGraphQLContentfulData(
      `query{
                blogPostCollection(order: date_DESC, preview:false, where: {slug:${slug}}) {
                items {
                    title
                    slug
                    date
                    tags
                    blogPicture{
                      url
                    }
                    body{
                      json
                    }
                    author{
                    ...on Author { 
                          name
                          surname
                        }
                    }
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return {
    title: blogPost.data.blogPost.items[0].title,
    slug: blogPost.data.blogPost.items[0].title.slug,
    date: parseBlogDate(new Date(blogPost.data.blogPost.items[0].title.date)),
    blogPictureUrl: blogPost.data.blogPost.items[0].title.blogPicture.url,
    articleBody: blogPost.data.blogPost.items[0].title.body.json.content, //ARRAY OF PARAGRAPHS
    tags: blogPost.data.blogPost.items[0].title.tags,
    author: {
      name: blogPost.data.blogPost.items[0].title.author.name,
      surname: blogPost.data.blogPost.items[0].title.author.surname,
    },
  };
}

export async function getBlogSlugs() {
  try {
    var blogSlugs = await fetchGraphQLContentfulData(
      `query{
                blogPostCollection(order: date_DESC, preview:false) {
                items {
                    slug
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return blogSlugs.data.blogPostCollection.items.map(
    (blogPost) => blogPost.slug
  );
}

export async function getCryptoOffer(limit) {
  try {
    var cryptoOffer = await fetchGraphQLContentfulData(
      `query{
                cryptoCurrencyCollection(preview:false ${
                  limit ? `limit:${limit}` : ""
                }) {
                items {
                    name
                    slug
                    icon{
                      url
                    }
                  	description{
                      json
                    }
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return cryptoOffer.data.cryptoCurrencyCollection.items.map((cryptoCoin) => ({
    name: cryptoCoin.name,
    slug: cryptoCoin.slug,
    iconPictureUrl: cryptoCoin.icon.url,
    description: cryptoCoin.description.json.content, //ARRAY OF PARAGRAPHS
  }));
}

export async function getCryptoCoin(slug) {
  try {
    var cryptoOffer = await fetchGraphQLContentfulData(
      `query($slug:String){
                cryptoCurrencyCollection(preview:false where:{slug:$slug}) {
                items {
                    name
                    slug
                    icon{
                      url
                    }
                  	description{
                      json
                    }
                }
            }
            }`,
      { slug: slug }
    );
  } catch (error) {
    throw new Error(error);
  }
  console.log(cryptoOffer.data.cryptoCurrencyCollection.items[0]);

  return {
    name: cryptoOffer.data.cryptoCurrencyCollection.items[0].name,
    slug: cryptoOffer.data.cryptoCurrencyCollection.items[0].slug,
    iconPictureUrl: cryptoOffer.data.cryptoCurrencyCollection.items[0].icon.url,
    description:
      cryptoOffer.data.cryptoCurrencyCollection.items[0].description.json
        .content, //ARRAY OF PARAGRAPHS
  };
}

export async function getCryptoSlugs() {
  try {
    var cryptoSlugs = await fetchGraphQLContentfulData(
      `query{
                cryptoCurrencyCollection(preview:false) {
                items {
                    slug
                }
            }
            }`
    );
  } catch (error) {
    throw new Error(error);
  }

  return cryptoSlugs.data.cryptoCurrencyCollection.items.map(
    (cryptoCoin) => cryptoCoin.slug
  );
}

export async function getUser(email, password) {
  console.log(typeof email);
  console.log("Pozvan getuser");
  try {
    var user = await fetchGraphQLContentfulData(`           
         query{
            userCollection(preview:false where:{password:${password}}){
            items {
              name
              surname
              email
              analytics
              creditCardsCollection(limit:3){
                ...on UserCreditCardsCollection{
                  items{
                    ...on CreditCards{
                      cardHolder
                      securityCode
                      expDate
                      dateAdded
                      icon{
                        url
                      }
                    }
                  }
                }
              }
              crpytoPortfolioCollection(limit:5){
                ...on UserCrpytoPortfolioCollection{
                  items{
                    ...on CryptoPortfolio{
                      growthSign
                      growthValue
                      amount
                      price
                      holdings
                      crpytoCurrency{
                        ...on CryptoCurrency{
                          icon {
                            url
                          }
                          name
                        }
                      }
                    }
                  }
                }
              }
              tradesCollection(limit:7){
                ...on UserTradesCollection{
                  items{
                    ...on Trades{
                      fromCryptoCurrency{
                        ...on CryptoCurrency{
                          icon{url}
                          name
                        }
                      }
                      toCryptoCurrency{
                        ...on CryptoCurrency{
                          icon{url}
                          name
                        }
                      }
                      fromAmount
                      toAmount
                      transactionNumber
                      approvalNumber
                      time
                      fee
                      isCreditCardPurchase
                    }
                  }
                }
              }
            }
        }
      }`);
  } catch (error) {
    throw new Error(error);
  }

  if (user.data.userCollection.items.length > 0) {
    //vrati objekt sa svin podacima vezanim za usera(trades + portfolio + kartice)
    return {
      name: user.data.userCollection.items[0].name,
      surname: user.data.userCollection.items[0].surname,
      email: user.data.userCollection.items[0].email,
      analytics: user.data.userCollection.items[0].analytics,
      creditCards:
        user.data.userCollection.items[0].creditCardsCollection.items.map(
          (creditCard) => ({
            cardHolder: creditCard.cardHolder,
            securityCode: creditCard.securityCode,
            expDate: creditCard.expDate,
            dateAdded: parseDate(new Date(creditCard.dateAdded)),
            iconUrl: creditCard.icon.url,
          })
        ),
      cryptoPortfolio:
        user.data.userCollection.items[0].crpytoPortfolioCollection.items.map(
          (crypto) => ({
            growthSign: crypto.growthSign,
            growthValue: crypto.growthValue,
            amount: crypto.amount,
            price: crypto.price,
            holdings: crypto.holdings,
            cryptoName: crypto.crpytoCurrency.name,
            cryptoIconUrl: crypto.crpytoCurrency.icon.url,
          })
        ),
      trades: user.data.userCollection.items[0].tradesCollection.items.map(
        (trade) => ({
          fromCryptoName: !trade.isCreditCardPurchase
            ? trade.fromCryptoCurrency.name
            : null,
          fromCryptoIconUrl: !trade.isCreditCardPurchase
            ? trade.fromCryptoCurrency.icon.url
            : null,
          toCryptoName: trade.toCryptoCurrency.name,
          toCryptoIconUrl: trade.toCryptoCurrency.icon.url,
          fromAmount: trade.fromAmount,
          toAmount: trade.toAmount,
          transactionNumber: trade.transactionNumber,
          approvalNumber: trade.approvalNumber,
          time: parseDate(trade.time),
          fee: trade.fee,
          isCreditCardPurchase: trade.isCreditCardPurchase, //ako je true onda je fromCryptoName i fromCryptoIconUrl null
        })
      ),
    };
  } else return null; //ne postoji korisnik sa zadanim user name i password
}
