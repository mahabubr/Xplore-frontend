import { useState } from "react";
import { Modal, Button, message } from "antd";
import { useCreateFeedbackMutation } from "@/redux/api/features/feedback/feedbackApi";
import { useGetProfileQuery } from "@/redux/api/features/user/userApi";

const FeedbackModal = ({ visible, onCancel }: any) => {
  const [feedback, setFeedback] = useState("");

  const [createFeedback] = useCreateFeedbackMutation();
  const { data } = useGetProfileQuery({});

  const handleFeedbackChange = (e: any) => {
    setFeedback(e.target.value);
  };

  const handleSaveFeedback = async () => {
    message.loading("Processing...");
    try {
      const res = await createFeedback({
        description: feedback,
        userId: data?.data?.id,
      }).unwrap();

      if (res.success) {
        message.success(res.message);
        onCancel();
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <Modal
      title="Feedback"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSaveFeedback}>
          Save
        </Button>,
      ]}
    >
      <textarea
        placeholder="Please enter your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange}
        rows={4}
        className="w-full p-2 rounded-md"
      />
    </Modal>
  );
};

export default FeedbackModal;
