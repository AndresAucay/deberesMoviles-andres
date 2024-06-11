import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, InputNumber, Select } from "antd";

export const ProductCreate = () => {
    const { formProps, saveButtonProps } = useForm({
        resource: "products",
        redirect: "list",
    });

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Name"}
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the product name",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Description"}
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Please enter the product description",
                        },
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label={"Price"}
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Please enter the product price",
                        },
                    ]}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    label={"Material"}
                    name="material"
                    rules={[
                        {
                            required: true,
                            message: "Please enter the product material",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Category"}
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true,
                            message: "Please select a category",
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>
            </Form>
        </Create>
    );
};
