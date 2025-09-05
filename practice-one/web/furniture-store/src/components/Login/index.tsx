import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from '../common/Image';
import { Button } from '../ui/button';

import GoogleLogo from '../../assets/images/google_logo.svg';
import AppleLogo from '../../assets/images/apple_logo.svg';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import Sidebar from '../Sidebar';
import SignUp from '../SignUp';

const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

const Login = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div className="w-full md:w-1/2 md:mx-auto lg:w-3/5">
      <div className=" w-1/3 mx-auto">
        <Image
          src="https://ucarecdn.com/e0cf545f-60e1-4fb0-bf22-e22c6198b08d/Nightstand101.png"
          alt="Accessories"
        />
      </div>
      <p className="mt-4 text-center md:text-left md:ml-3 md:text-2xl text-lg font-semibold">
        Welcome back
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
            <p className="text-app-tertiary font-semibold hover:underline hover:underline-offset-1 text-right mr-2">
              <a href="">Forgot password?</a>
            </p>
            <div className="flex justify-start mt-4">
              <Button
                type="submit"
                className="bg-app-primary w-full h-15 rounded-3xl text-base font-semibold hover:bg-app-tertiary"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="flex items-center w-full my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 font-medium">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-6 ml-3 mr-4">
        <Button
          variant={'ghost'}
          className="border-1 rounded-3xl py-6 font-semibold hover:bg-gray-100"
        >
          <Image src={GoogleLogo} alt="Google Logo" className="w-6 h-6" />
          Continue with Google
        </Button>
        <Button
          variant={'ghost'}
          className="border-1 rounded-3xl py-6 font-semibold hover:bg-gray-100"
        >
          <Image src={AppleLogo} alt="Apple Logo" className="w-6 h-6" />
          Continue with Apple
        </Button>
      </div>
      <p className="text-center mt-6 text-lg font-normal">
        First time here?{' '}
        <Sidebar
          button={
            <span className="text-app-primary hover:underline hover:underline-offset-1">
              Create an account
            </span>
          }
          children={<SignUp />}
          title="Create an account"
        />
      </p>
    </div>
  );
};

export default Login;
