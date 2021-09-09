import { useState } from "react";

import { Drawer as AntdDrawer, Button as AntdButton } from "antd";

export default function AppCodeDrawer() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <AntdButton onClick={() => setVisible(true)}>
        Please may I have some code
      </AntdButton>
      <AntdDrawer
        onClose={() => setVisible(false)}
        visible={visible}
      ></AntdDrawer>
    </div>
  );
}
