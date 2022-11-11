import Head from "next/head";
import { Button, Rect, Card, Layout } from "components";

export default function Home({ children }) {
    const cardData = [
        {
            title: "card 1",
            id: 1,
        },
        {
            title: "card 2",
            id: 2,
        },
        {
            title: "card 3",
            id: 3,
        },
        {
            title: "card 4",
            id: 4,
        },
        {
            title: "card 5",
            id: 5,
        },
    ];

    let cardNumber = cardData.length > 0 ? cardData.length : 0;
    return (
        <div>
            <Head>
                <title>CSS Modules</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1 className="mb-sml-2">CSS Modules playground</h1>

                <Layout size={cardNumber}>
                    {cardData.map((card) => (
                        <Card title={card.title} key={card.id} />
                    ))}
                </Layout>

                <Rect
                    value={"I am rectangle."}
                    toggle={"is-toggled"}
                    color={"red"}
                    margin={"mb-sml-2"}
                />

                <Button type={"primary"} size={"base"} value={"Submit"} />
                <Button type={"secondary"} size={"base"} value={"Submit"} />
            </div>
        </div>
    );
}