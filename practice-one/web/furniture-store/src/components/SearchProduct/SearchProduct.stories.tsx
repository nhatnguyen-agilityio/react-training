import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchProduct from '.';
import { useState } from 'react';

const meta: Meta<typeof SearchProduct> = {
  title: 'Components/SearchProduct',
  component: SearchProduct,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    searchProductsInput: {
      control: 'text',
      description: 'The input value of the search product',
    },
    setSearchProductsInput: {
      action: 'setSearchProductsInput',
      description: 'The function to call when the input value changes',
    },
    setSearchProducts: {
      action: 'setSearchProducts',
      description: 'The function to call when the search product is set',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchProductsInput: '',
    setSearchProductsInput: () => {},
    setSearchProducts: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const [searchProductsInput, setSearchProductsInput] = useState('');
    const [searchProducts, setSearchProducts] = useState('');

    return (
      <div className="space-y-4">
        <SearchProduct
          searchProductsInput={searchProductsInput}
          setSearchProductsInput={setSearchProductsInput}
          setSearchProducts={(value) => {
            console.log('Search triggered:', value);
            setSearchProducts(value);
          }}
        />
        {searchProducts && (
          <div className="text-center text-sm text-gray-600">
            Current search: <strong>{searchProducts}</strong>
          </div>
        )}
      </div>
    );
  },
};
