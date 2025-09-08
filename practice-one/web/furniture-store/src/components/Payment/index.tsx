import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import Sidebar from '../Sidebar';
import { Button } from '../ui/button';
import OrderSuccess from '../OrderSuccess';

const paymentFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Cardholder name is required' })
    .max(100, { message: 'Name must be at most 100 characters' }),

  cardNumber: z
    .string()
    .min(1, { message: 'Card number is required' })
    .regex(/^[0-9]{16}$/, { message: 'Card number must be 16 digits' }),

  cvv: z
    .string()
    .min(1, { message: 'CVV is required' })
    .regex(/^[0-9]{3,4}$/, { message: 'CVV must be 3 or 4 digits' }),

  expirationDate: z
    .string()
    .min(1, { message: 'Expiration date is required' })
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/, {
      message: 'Expiration date must be MM/YY or MM/YYYY',
    })
    .refine(
      (date) => {
        const [month, year] = date.split('/');
        if (!month || !year) return false;

        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();

        const expMonth = parseInt(month, 10);
        const expYear =
          year.length === 2 ? 2000 + parseInt(year, 10) : parseInt(year, 10);

        return (
          expYear > currentYear ||
          (expYear === currentYear && expMonth >= currentMonth)
        );
      },
      { message: 'Card has expired' },
    ),
  useShippingAddress: z.boolean({
    message: 'You must specify if using shipping address',
  }),

  rememberMe: z.boolean({
    message: 'You must specify if you want to be remembered',
  }),
});

const Payment = () => {
  const form = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      name: '',
      cardNumber: '',
      cvv: '',
      expirationDate: '',
      useShippingAddress: false,
      rememberMe: false,
    },
  });

  const handleSubmit = (data: z.infer<typeof paymentFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="px-2 lg:px-7 md:w-3/5 md:mx-auto ml-3 mr-4 mt-6">
          <FormField
            name="cardNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormControl>
                  <Input
                    className="pl-5 h-15 rounded-3xl"
                    type="number"
                    placeholder="Card number"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4 mb-5">
            <FormField
              name="expirationDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="pl-5 h-15 rounded-3xl"
                      type="text"
                      placeholder="Expiration date"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="cvv"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="pl-5 h-15 rounded-3xl"
                      type="number"
                      placeholder="CVV"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormControl>
                  <Input
                    className="pl-5 h-15 rounded-3xl"
                    type="text"
                    placeholder="Cardholder name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="useShippingAddress"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-5 flex items-center">
                <FormControl>
                  <Checkbox
                    id="useShippingAddress"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    ref={field.ref}
                    className="data-[state=checked]:bg-app-primary data-[state=checked]:opacity-30"
                  />
                </FormControl>
                <FormLabel
                  htmlFor="useShippingAddress"
                  className="text-base/6 font-light text-lef !text-inherit"
                >
                  Use shipping address as billing address
                </FormLabel>
              </FormItem>
            )}
          />
          <div className="mr-15 mt-10">
            <p className="mb-3 text-xl text-body-sub">Remember me</p>
            <FormField
              name="rememberMe"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-5 flex items-center">
                  <FormControl>
                    <Checkbox
                      id="rememberMe"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                      className="data-[state=checked]:bg-app-primary data-[state=checked]:opacity-30"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="rememberMe"
                    className="text-base/6 font-light text-lef !text-inherit"
                  >
                    Save my information for faster checkout
                  </FormLabel>
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
                Pay Now
              </Button>
            }
            children={<OrderSuccess />}
            title=""
          />
        </div>
      </form>
    </Form>
  );
};

export default Payment;
