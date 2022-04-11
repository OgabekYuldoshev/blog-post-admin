import React from "react";
import { Container, Card, CardHeader } from "shards-react";
import RegisterComponents from "../components/components-overview/Register";


const Register = () => (
    <Container fluid className="main-content-container d-flex justify-content-center align-items-center mh-100 px-4 pb-4">
        <Card small className="w-50">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <RegisterComponents />
        </Card>
    </Container>
);

export default Register;
