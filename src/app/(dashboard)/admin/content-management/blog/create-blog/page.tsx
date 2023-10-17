"use client";

import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import FormTextArea from "@/components/Froms/FormTextArea";
import { useCreateBlogMutation } from "@/redux/api/features/blog/blogApi";
import { Button, message } from "antd";

const CreateBlog = () => {
  const [createBlog] = useCreateBlogMutation();

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      const res = await createBlog(data).unwrap();
      if (res?.success) {
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <div className="w-6/12 mx-auto">
      <Form submitHandler={onSubmit}>
        <FormInput name="title" label="Title" placeholder="Write your title" />
        <br />
        <FormTextArea
          name="description"
          label="Description"
          placeholder="Write your title"
          rows={10}
        />
        <br />
        <Button htmlType="submit">Create Blog</Button>
      </Form>
    </div>
  );
};

export default CreateBlog;
