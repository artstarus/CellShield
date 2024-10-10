import { ShippingAddress } from "@prisma/client"
import { Html, Head, Preview, Body, Container, Section, Img, Heading, Text, Hr, Row, Column } from "@react-email/components"

const OrderReceivedEmail = ({
    shippingAddress,
    orderId,
    orderDate,
}: {
    shippingAddress: ShippingAddress
    orderId: string
    orderDate: string
}) => {

    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://cellshield.vercel.app"

    return (
        <Html>
            <Head />
            <Preview>Your order summary and estimated delivery date</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={message}>
                        <Img src={`${baseUrl}/shield_3.png`} width="65" height="73" alt="shield logo" style={{ margin: "auto" }} />
                        <Heading style={global.heading}>
                            Thank you for your purchase!
                        </Heading>
                        <Text style={global.text}>
                            Your order will be processed shortly, and you can expect delivery within 3-7 business days. You will receive a notification once your order has been shipped.
                        </Text>
                        <Text style={{ ...global.text, marginTop: 24 }}>
                            If you have any questions or need assistance, please don't hesitate to reach out to us with your order number. We're here to help!
                        </Text>
                    </Section>

                    <Hr style={global.hr} />

                    <Section style={global.defaultPadding}>
                        <Text style={addressTitle}>
                            Shipping to: {shippingAddress.name}
                        </Text>
                        <Text style={{ ...global.text, fontSize: 14 }}>
                            {shippingAddress.street}, {shippingAddress.city},{" "} {shippingAddress.state} {shippingAddress.postalCode}
                        </Text>
                    </Section>

                    <Hr style={global.hr} />

                    <Section style={global.defaultPadding}>
                        <Row style={{display: "inline-flex", marginBottom: 40}}>
                            <Column style={{width: 170}}>
                                <Text style={global.paragraphWithBold}>Order Number</Text>
                                <Text style={track.number}>{orderId}</Text>
                            </Column>
                            <Column style={{marginLeft: 20}}>
                                <Text style={global.paragraphWithBold}>Order Date</Text>
                                <Text style={track.number}>{orderDate}</Text>
                            </Column>
                        </Row>
                    </Section>

                    <Hr style={global.hr} />

                    <Section style={paddingY}>
                        <Row>
                            <Text style={{...footer.text, paddingTop: 30, paddingBottom: 30,}}>
                                If you have any questions or require further assistance, please don't hesitate to contact us directly. Please note that replies to this email may not be monitored.
                            </Text>
                        </Row>
                        <Row>
                            <Text style={footer.text}>
                                © CellShield, Inc. All Rights Reserved.
                            </Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>

    )
}

export default OrderReceivedEmail

const paddingX = {
    paddingLeft: '40px',
    paddingRight: '40px',
}

const paddingY = {
    paddingTop: '22px',
    paddingBottom: '22px',
}

const paragraph = {
    margin: '0',
    lineHeight: '2',
}

const global = {
    paddingX,
    paddingY,
    defaultPadding: {
        ...paddingX,
        ...paddingY,
    },
    paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
    heading: {
        fontSize: '32px',
        lineHeight: '1.3',
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: '-1px',
    } as React.CSSProperties,
    text: {
        ...paragraph,
        color: '#747474',
        fontWeight: '500',
    },
    button: {
        border: '1px solid #929292',
        fontSize: '16px',
        textDecoration: 'none',
        padding: '10px 0px',
        width: '220px',
        display: 'block',
        textAlign: 'center',
        fontWeight: 500,
        color: '#000',
    } as React.CSSProperties,
    hr: {
        borderColor: '#E5E5E5',
        margin: '0',
    },
}

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
    margin: '10px auto',
    width: '600px',
    maxWidth: '100%',
    border: '1px solid #E5E5E5',
}

const track = {
    container: {
        padding: '22px 40px',
        backgroundColor: '#F7F7F7',
    },
    number: {
        margin: '12px 0 0 0',
        fontWeight: 500,
        lineHeight: '1.4',
        color: '#6F6F6F',
    },
}

const message = {
    padding: '40px 74px',
    textAlign: 'center',
} as React.CSSProperties

const addressTitle = {
    ...paragraph,
    fontSize: '15px',
    fontWeight: 'bold',
}

const footer = {
    policy: {
        width: '166px',
        margin: 'auto',
    },
    text: {
        margin: '0',
        color: '#AFAFAF',
        fontSize: '13px',
        textAlign: 'center',
    } as React.CSSProperties,
}