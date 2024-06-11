import {
    DateField,
    MarkdownField,
    NumberField,
    Show,
    TextField,
  } from "@refinedev/antd";
  import { useOne, useShow } from "@refinedev/core";
  import { Typography } from "antd";
  
  const { Title } = Typography;
  
  export const ProductShow = () => {
    const { queryResult } = useShow({});
    const { data, isLoading } = queryResult;
  
    const record = data?.data;
  
    // Utiliza useOne para obtener los detalles de la categoría del producto
    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
      resource: "categories",
      id: record?.category?.id || "",
      queryOptions: {
        enabled: !!record,
      },
    });
  
    return (
      <Show isLoading={isLoading}>
        <Title level={5}>{"ID"}</Title>
        <NumberField value={record?.id ?? ""} />
        <Title level={5}>{"Name"}</Title>
        <TextField value={record?.name} />
        <Title level={5}>{"Description"}</Title>
        <MarkdownField value={record?.description} />
        <Title level={5}>{"Price"}</Title>
        <TextField value={record?.price} />
        <Title level={5}>{"Material"}</Title>
        <TextField value={record?.material} />
        <Title level={5}>{"Category"}</Title>
        <TextField
          value={
            categoryIsLoading ? <>Loading...</> : <>{categoryData?.data?.title}</>
          }
        />
        <Title level={5}>{"Created At"}</Title>
        <DateField value={record?.createdAt} />
      </Show>
    );
  };
  