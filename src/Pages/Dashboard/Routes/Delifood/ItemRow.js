import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
const ItemRow = ({ item, setRemoveModal, setAvailabilityModal }) => {
  const { name, available, description, img1, price, categories } = item;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img1} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{categories}</div>
          </div>
        </div>
      </td>
      <td>{description?.slice(0, 60)} ...</td>
      <td>{price} টাকা</td>
      <th>
        <label
          htmlFor="availability-modal"
          className="text-2xl cursor-pointer"
          onClick={() => setAvailabilityModal(item)}
        >
          {available ? (
            <BsToggle2On className="text-blue-500" />
          ) : (
            <BsToggle2Off className="text-error" />
          )}
        </label>
      </th>
      <th>
        <label
          onClick={() => setRemoveModal(item)}
          htmlFor="remove-modal"
          className="btn btn-ghost btn-md"
        >
          <RiDeleteBin6Fill className="text-error text-2xl" />
        </label>
      </th>
    </tr>
  );
};

export default ItemRow;
