import { Container, Grid, Input, Text, Textarea, useInput } from '@nextui-org/react';
import React from 'react';

const CheckOutForm = () => {
    const { value, reset, bindings } = useInput("");

    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const helper = React.useMemo(() => {
        if (!value)
            return {
                text: "",
                color: "",
            };
        const isValid = validateEmail(value);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [value]);
    return (
        <Container>
            <Text h1 size={30}>Booking Submission</Text>
            <form>
                <Grid.Container>
                    <Grid md={6} xs={12}>
                        <Input label="First Name" placeholder="First Name" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="Last Name" placeholder="Last Name" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input
                            {...bindings}
                            clearable
                            shadow={false}
                            width='380px'
                            onClearClick={reset}
                            status={helper.color}
                            color={helper.color}
                            helperColor={helper.color}
                            helperText={helper.text}
                            size='lg'
                            type="email"
                            label="Email"
                            placeholder="example@email.com"
                            required
                        />
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="Phone" placeholder="Your Phone" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="Address Line 1" placeholder="Address Line 1" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="Address Line 2" placeholder="Address Line 2" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="City" placeholder="Your City" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="State/Province/Region" placeholder="State/Province/Region" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="ZIP code/Postal code" placeholder="ZIP code/Postal code" size='lg' width='380px' required/>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Input label="Country" placeholder="Country" size='lg' width='380px' required/>
                    </Grid>
                    <Grid xs={12}>
                        <Textarea label="Special Requirement" size='lg' placeholder="Special Requirement" rows={8} fullWidth />
                    </Grid>
                    <Grid>
                        <Input type="submit" width='100px' size='lg' css={{my: "$10", cursor: "pointer"}}/>
                    </Grid>
                </Grid.Container>
            </form>
        </Container>
    );
};

export default CheckOutForm;