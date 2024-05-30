import EditPost from "@/components/EditPost";

const EditPostPage = ({ params }) => {
    const { slug } = params;

    return (
        <EditPost slug={slug} />
    );
}

export default EditPostPage;
