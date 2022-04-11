import React from "react";
import { Container, Card, CardHeader } from "shards-react";
import LoginComponents from "../components/components-overview/Login";


const Login = () => (
    <Container fluid className="main-content-container d-flex justify-content-center align-items-center mh-100 px-4 py-5 pb-4">
        <Card small className="w-50">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <LoginComponents />
        </Card>
    </Container>
);

export default Login;
