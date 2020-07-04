var axios = require("axios");
// Makes a asynchronous POST request to sync the users the changes on the users store.
async function asyncPost() {
  try {
    const data = await axios.post(
      "https://api-staging.bloglinkerapp.com/v1/update_post_data?shop=blog-linker-test-store-staging.myshopify.com"
    );
    if (data.status == 200) {
      return console.log("Syncing successful");
    } else {
      console.log("Syncing unsuccesful");
    }
    return data;
  } catch (error) {
    if (error.response.status == "403") console.log("Syncing unsuccesful");
    console.log("error", error);
  }
}

// Makes a asynchronous GET request to get information from the users store.
async function asyncGet() {
  try {
    // fetch data from a url endpoint
    const data = await axios.get(
      "https://api-staging.bloglinkerapp.com/v1/status?shop=blog-linker-test-store-staging.myshopify.com"
    );
    return data;
  } catch (error) {
    console.log("error", error);
    return error;
    // appropriately handle the error
  }
}
// Logs the GET request on server side to debug if it errors out on the client side.
async function getConfirmation() {
  const response = await asyncGet();
  console.log(response);
  if (response.data.shop != null)
    console.log("Your store is " + response.data.shop);
  else console.log("You do not have a shop");
  if (response.data.shop != null)
    console.log("Your store is " + response.data.shop);
  else console.log("You do not have a shop");
  if (response.data.blogCount != null)
    console.log("You have " + response.data.blogCount + " blog posts");
  else console.log("You do not have any blogs");
  if (response.data.availableBlogCount != null)
    console.log("You have " + response.data.availableBlogCount + " blog posts");
  else console.log("You do not have any available blogs");
  if (response.data.relatedPostCount != null)
    console.log(
      "You have " + response.data.relatedPostCount + " related posts"
    );
  else console.log("You do not have any related posts");

  if (response.data.relatedProductCount != null)
    console.log(
      "You have " + response.data.relatedProductCount + " related products"
    );
  else console.log("You do not have any related products");
}

asyncPost();
getConfirmation();
