import React from 'react';
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";

const Header = () => {

    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="warning"
                hideIn="xs"
                variant="highlight"
            >
            <Navbar.Link href='/'>Home</Navbar.Link>
            <Navbar.Link href='/checkout'>Checkout</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                    },
                }}
            >
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="warning"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="warning"
                        onAction={(actionKey) => console.log({ actionKey })}
                    >
                        <Dropdown.Item key="Personal" css={{ height: "$18" }}>
                            <Text b color="inherit" css={{ d: "flex" }}>
                               Shuvo Khan
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="profile" withDivider>
                            My Profile
                        </Dropdown.Item>
                        <Dropdown.Item key="cart">Cart</Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback">
                            Help & Feedback
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
            <Navbar.Collapse disableAnimation>
                <Navbar.CollapseItem
                    activeColor="warning"
                >
                    <Link
                        color="inherit"
                        css={{
                            minWidth: "80%",
                            minHeight: "80%"
                        }}
                        href="/"
                    >Home</Link>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;