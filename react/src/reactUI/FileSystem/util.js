export const fileStructure = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "folder-1",
      isFolder: true,
      children: [
        {
          name: "file-1",
          isFolder: false,
          children: {},
        },
      ],
    },
    {
      name: "folder-2",
      isFolder: true,
      children: [
        {
          name: "file-2",
          isFolder: "false",
          children: {},
        },
      ],
    },
  ],
};
