/* 
This automation is run when a record is created. It takes the last
record in airtable (the most recently created) and updates the
corresponding slack profile.
*/

import axios from 'axios';

(async () => {
  const memberSlackId = "U01LGPGMFQ9";

  let body = {
      "user": memberSlackId,
      "profile": {
          "real_name": "Bala is awesome",
          "fields": {
            "Xf02PTJ13W05": {"value": "hello"},
          },
      }
  }

  let response = await axios.post('https://slack.com/api/users.profile.set', body, {
      headers: {
          'Content-Type': 'application/json',
              'Authorization': 'Bearer xoxp-13529322848-13528861921-2833101418615-071c461d41fa4e93f59c37509aa1654c'

      },
  });
  console.log("HERE", response.data);
})()

