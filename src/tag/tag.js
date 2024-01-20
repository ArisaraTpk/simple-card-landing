import { MyTagList } from "../sourceProduct";
import _ from "lodash";

export function TagRenderAll(tags) {
  var RawTag = ``;
  for (var i = 0; i < tags.length; i++) {
    var val = tags[i];
    var value = _.find(MyTagList, { id: val });
    RawTag = RawTag + tagRender(value);
  }
  return `
   <style>
    .tag-container {
        display: inline-flex;
        flex-direction: inherit;
        font-size: 12px;
        left: 15px;
        bottom: 0px;
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 10px;
        padding-left: 0px;
    }

    .tag-product-name {
        background: rgb(51, 83, 13);
        color: black;
        padding: 2px;
        border-radius: 4px;
        margin-left: 4px;
    }
   </style>
    <div class="tag-container">${RawTag}</div>
  `;
}

function tagRender(tag) {
  return `
      <div class="tag-product-name">${tag.name}</div>
    `;
}
