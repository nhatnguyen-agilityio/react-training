import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from '../common/Image';
import { Checkbox } from '../ui/checkbox';
import Sidebar from '../Sidebar';
import Login from '../Login';

const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
      acceptTerms: false,
    },
  });

  const handleSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <>
      <div className=" w-1/3 mx-auto">
        <Image
          src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
          alt="Accessories"
        />
      </div>
      <p className="mt-4 text-center md:text-left md:ml-3 md:text-2xl text-lg font-semibold">
        Let's get your account set up
      </p>
      <div className="ml-3 mr-4 mt-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-1">
                  <div className="relative">
                    <FormControl>
                      <Input
                        id="username"
                        {...field}
                        className="pl-5 h-15 rounded-3xl"
                        placeholder="Username"
                      />
                    </FormControl>
                  </div>
                  <div className="min-h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-1">
                  <div className="relative">
                    <FormControl>
                      <Input
                        id="password"
                        {...field}
                        type="password"
                        className="pl-5 h-15 rounded-3xl"
                        placeholder="Password"
                      />
                    </FormControl>
                  </div>
                  <div className="min-h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="acceptTerms"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start space-x-4 mt-2">
                    <FormControl>
                      <Checkbox
                        id="acceptTerms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        ref={field.ref}
                        name={field.name}
                        className="mt-1 h-6 w-6"
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="acceptTerms"
                      className="text-base/6 font-light text-lef !text-inherit"
                    >
                      <p>
                        I agree to the{' '}
                        <span className="underline underline-offset-1 hover:text-app-tertiary">
                          Terms and Conditions
                        </span>{' '}
                        of Furniture and acknowledge the{' '}
                        <span className="underline underline-offset-1 hover:text-app-tertiary">
                          Privacy Policy
                        </span>
                      </p>
                    </FormLabel>
                  </div>
                  <div className="min-h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <div className="flex justify-start mt-6">
              <Button
                type="submit"
                className="bg-app-primary w-full h-15 rounded-3xl text-base font-semibold hover:bg-app-tertiary"
              >
                Create account
              </Button>
            </div>
          </form>
        </Form>
        <p className="text-center mt-6 text-lg font-normal">
          Already have an account?{' '}
          <Sidebar
            button={
              <span className="text-app-primary hover:underline hover:underline-offset-1">
                Login
              </span>
            }
            children={<Login />}
            title="Create an account"
          />
        </p>
      </div>
    </>
  );
};

export default SignUp;
