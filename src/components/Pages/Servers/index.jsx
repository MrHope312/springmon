//Server Page
import React, { Component } from 'react';

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import styled from 'styled-components';
import Background from '../../Layouts/Background';
import { Card, Icon, Button, Form, Input, Modal, Radio } from 'antd';

// import Loading from "../Loading/Loading";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.2em;
  height: 100vh;
  position: relative;
  background-color: #fff;
  justify-content: top;
  align-items:center;
  
`;
const ServerContainer = styled.div` 
    display: grid;
    grid-template-columns: auto auto auto;

`;
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Create a new collection"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input the title of collection!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);
class Servers extends Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };
    saveFormRef = formRef => {
        this.formRef = formRef;
    };
    render() {
        return (
            <Background>
                <Container>
                    <h1>Welcome to Your Servers</h1>
                    <ServerContainer>
                        <Card style={{ width: '200px', height: '200px', margin: '1em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button style={{ clear: 'all', border: 'none' }} onClick={this.showModal}>
                                <Icon style={{ fontSize: '60px' }} type="plus-circle" theme="twoTone" />
                            </Button>
                        </Card>
                        <Card style={{ width: '200px', height: '200px', margin: '1em' }}></Card>
                        <Card style={{ width: '200px', height: '200px', margin: '1em' }}></Card>
                        <Card style={{ width: '200px', height: '200px', margin: '1em' }}></Card>
                        <Card style={{ width: '200px', height: '200px', margin: '1em' }}></Card>
                        <Card style={{ width: '200px', height: '200px', margin: '1em' }}></Card>
                        <CollectionCreateForm
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                        />
                    </ServerContainer>
                </Container>
            </Background>
        );
    }
}
export default Servers;
