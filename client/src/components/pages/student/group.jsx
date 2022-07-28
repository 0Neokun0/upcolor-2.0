import GroupLayout from "components/templates/groupLayout";

const Group = () => {
    const menus = [
        {
            value: "チャット",
            url: "chat",
        },
        {
            value: "作成",
            url: "create",
        },
        {
            value: "招待",
            url: "chat",
        },
    ]

    return (
        <GroupLayout menus={menus} />
    );
}

export default Group;
