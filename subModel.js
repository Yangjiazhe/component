import axios from "@/service/axios";

async function goodsCode(goodsCode) {
  if (!(goodsCode && goodsCode.length !== 0)) return {};

  let src = goodsCode; // 1.定义原始数据
  let f = Array.from(new Set(src)); // 2. 抽象出不重复的数据

  let param = {
    op: "read",
    table: "goods_code",
    field: "goods_name,goods_spec,goods_code",
    filter: { goods_code: ["IN", f] }
  };
  let rtn = await axios.post("/itemList/index", param);
  let rst = rtn.data.data;

  let rtnName = src.map(
    e => rst.goods_name[rst.goods_code.findIndex(e2 => e2 === e)]
  );
  let rtnSpec = src.map(
    e => rst.goods_spec[rst.goods_code.findIndex(e2 => e2 === e)]
  );
  return { goods_name: rtnName, goods_spec: rtnSpec };
}

async function staffName(staff) {
  if (!(staff && staff.length !== 0)) return -1;

  let src = staff; // 1.定义原始数据
  let f = Array.from(new Set(src)); // 2. 抽象出不重复的数据

  let param = {
    op: "read",
    table: "person",
    field: "id,name",
    filter: { id: ["IN", f] }
  };
  let rtn = await axios.post("/itemList/index", param);
  let rst = rtn.data.data;

  rst = src.map(e => rst.name[rst.id.findIndex(e2 => e2 === e)]); // 4.根据3中建立的对应关系，映射1中定义的原始数据.此处用'=='而不是'==='的原因是数据库为int型，但是查询号为string类型
  return rst;
}

async function addrName(location) {
  if (!(location && location.length !== 0)) return -1;

  let src = location; // 1.定义原始数据
  let f = Array.from(new Set(src)); // 2. 抽象出不重复的数据

  let param = {
    op: "read",
    table: "goods_addr",
    field: "room,shelf,layer",
    filter: { id: ["IN", f] }
  };
  let rtn = await axios.post("/itemList/index", param);
  let rst = rtn.data.data;

  let vals = Object.keys(rst).map(key =>
    src.map(e => rst[key][f.findIndex(e2 => e2 === e)])
  ); // 首先确定多个映射行的一个，其次借助映射关系获取src对应的数组
  rst = src.map((e, idx) =>
    [vals[0][idx], vals[1][idx], vals[2][idx]].join("-")
  );
  return rst;
}

export default { goodsCode, staffName, addrName };

// let goodsCodeDetail = await subModel.goodsCode(rtn.goods_code)
// rtn = { ...rtn, ...goodsCodeDetail }

// let addrName = await subModel.addrName(rtn.wh_location)
// if (addrName !== -1) {
//   rtn.wh_location = addrName
// }

// let name = await subModel.staffName(rtn.cost_staff)
// if (name !== -1) {
//   rtn.cost_staff = name
// }
