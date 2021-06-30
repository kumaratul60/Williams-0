import { getSession, useSession } from "next-auth/client";
import Header from "../components/Header";
import moment from "moment";
import db from "../../firebase";
import Order from "../components/Order";

function orders({}) {
  const [session] = useSession();

  //console.log(orders);

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pd-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders </h2>
        ) : (
          <h2>Please signin to see your orders </h2>
        )}
        <div className="mt-5 space-y-4">
          {/* ?. -> optional chain */}

          {/* Server Error
TypeError: orders.map is not a function */}
          {/* orders || orders?.map OR  
            orders.orders?.map */}

          {/* ordex -> any thing xyz v */}

          {orders.ordex?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default orders;

// Server side rendering

// any thing in getServerSideProps is a Node js

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get the user logged in credentials...

  //   useSession in fontend
  // getSession in backend/server-render
  // context -> it contains request, response, etc...

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  //  firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // Stripe orders
  const order = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(), // unix -> convert the number to actual date
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      order,
    },
  };
}