import React from "react";
import { Menu } from "viking-design";

const SubMenuDemo = ()=>{
  return(
    <div>
      <Menu defaultIndex="0">
        <Menu.Item>首页</Menu.Item>
        <Menu.SubMenu title="产品介绍">
          <Menu.Item>产品1</Menu.Item>
          <Menu.Item>产品2</Menu.Item>
          <Menu.Item>产品3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>联系我们</Menu.Item>
      </Menu>
      <div
        style={{
          marginTop: '10px',
          width: '256px',
          height: '200px',
          border: '1px solid #ccc',
        }}
      >
      </div>
    </div>
  )
}

export default SubMenuDemo