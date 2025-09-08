import z from 'zod';
import Login from '../Login';
import Sidebar from '../Sidebar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Payment from '../Payment';

const checkoutFormSchema = z.object({
  email: z
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(50, { message: 'First name must be at most 50 characters' }),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .max(50, { message: 'Last name must be at most 50 characters' }),
  phoneNumber: z
    .string()
    .min(1, { message: 'Phone number is required' })
    .regex(/^[0-9]{8,15}$/, { message: 'Phone number must be 8–15 digits' }),
  address: z
    .string()
    .min(1, { message: 'Address is required' })
    .max(200, { message: 'Address must be at most 200 characters' }),
  city: z
    .string()
    .min(1, { message: 'City is required' })
    .max(100, { message: 'City must be at most 100 characters' }),
  country: z
    .string()
    .min(1, { message: 'Country is required' })
    .max(100, { message: 'Country must be at most 100 characters' }),
});

const Checkout = () => {
  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      city: '',
      country: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof checkoutFormSchema>) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <>
      <div className="px-5 flex flex-col items-start md:w-3/5 mx-auto lg:px-7">
        <p className="text-lg font-semibold text-body-sub">
          Customer Information
        </p>
        <p className="text-body-sub mt-1">
          Have an account?{' '}
          <Sidebar
            button={<span className="text-app-primary">Login</span>}
            children={<Login />}
            title="Login"
          />
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
          <div className="px-2 lg:px-7 md:w-3/5 md:mx-auto ml-3 mr-4 mt-6">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="pl-5 h-15 rounded-3xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-lg font-semibold mt-3 text-body-sub mb-4">
              Shipping Address
            </p>
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="pl-5 h-15 rounded-3xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="pl-5 h-15 rounded-3xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      className="pl-5 h-15 rounded-3xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormControl>
                    <Input
                      placeholder="Address"
                      className="pl-5 h-15 rounded-3xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="city"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="City"
                        className="pl-5 h-15 rounded-3xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="country"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Country"
                        className="pl-5 h-15 rounded-3xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0">
            <Sidebar
              button={
                <Button
                  type="submit"
                  className="w-full h-14 bg-app-primary rounded-none text-white text-lg font-semibold hover:bg-app-tertiary"
                >
                  Proceed to payment
                </Button>
              }
              children={<Payment />}
              title="Payment"
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export default Checkout;
