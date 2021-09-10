import { useState } from "react";

import { Drawer as AntdDrawer, Button as AntdButton } from "antd";
import { AppCodeOutput } from "..";

export default function AppCodeDrawer() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <AntdButton
        type="primary"
        danger
        size="large"
        onClick={() => setVisible(true)}
      >
        Please may I have some code
      </AntdButton>
      <AntdDrawer
        bodyStyle={{ background: "#111", color: "#9fcbd3" }}
        width={500}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <AppCodeOutput />
      </AntdDrawer>
    </div>
  );
}
