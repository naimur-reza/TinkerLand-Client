import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import Marquee from "react-fast-marquee";

export default function CustomerReview() {
  return (
    <div className="py-14 bg-black">
      <h1 className="text-3xl text-center font-semibold text-gray-200">
        Voices of Delight
      </h1>
      <p className="opacity-70 text-center  pt-2 pb-5 text-gray-400 px-10">
        Unforgettable Experiences Shared by Our Valued Customers
      </p>
      <Marquee>
        <Card
          color="transparent"
          shadow={false}
          className="w-full  p-5 max-w-[26rem] mx-3 bg-white/10  backdrop-blur-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-gray-200">
                  Liam Thomas
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography className="text-gray-400">
                Manager @ Toy Village
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0 h-32">
            <Typography className="text-gray-400">
              I recently purchased the action figure toy from this site, and I'm
              blown away! The attention to detail is incredible, and the
              articulation allows for dynamic poses. This is definitely a
              must-have for any collector!
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full  p-5 max-w-[26rem] mx-3 bg-white/10  backdrop-blur-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-gray-200">
                  Sophia Wilson
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography className="text-gray-400">
                Frontend Lead @ ToyUniverse
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0 h-32">
            <Typography className="text-gray-400">
              I've been collecting action figures for years, and this one stands
              out among the rest. The quality of the materials used is
              top-notch, and the paint job is flawless. It's definitely worth
              the investment!
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full  p-5 max-w-[26rem] mx-3 bg-white/10  backdrop-blur-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-gray-200">
                  Noah Davis
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography className="text-gray-400">CEO @ ToyMania</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0 h-32">
            <Typography className="text-gray-400">
              I bought this action figure toy as a gift for my son, and he
              absolutely loves it! The durability is impressive, and it's been
              able to withstand his rough play. It's become his new favorite
              toy!
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full  p-5 max-w-[26rem] mx-3 bg-white/10  backdrop-blur-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-gray-200">
                  Ava Martinez
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography className="text-gray-400">
                Manager @ Renata
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0 h-32">
            <Typography className="text-gray-400">
              As a long-time fan of the franchise, I was thrilled to find this
              action figure toy on this site. The level of accuracy in capturing
              the character's likeness is remarkable. It's a great addition to
              my collection!
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full  p-5 max-w-[26rem] mx-3 bg-white/10  backdrop-blur-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-gray-200">
                  Ethan Thompson
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography className="text-gray-400">
                Frontend Lead @ Amazon
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0 h-32">
            <Typography className="text-gray-400">
              I'm a collector and a photography enthusiast, and this action
              figure toy has become the perfect subject for my creative shots.
              The range of accessories and interchangeable parts adds so much
              versatility. I can't wait to see what other figures they release
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full  p-5 max-w-[26rem] mx-3 bg-white/10  backdrop-blur-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-gray-200">
                  Olivia Rodriguez
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography className="text-gray-400">
                Product Manager @ Shopify
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0 h-32">
            <Typography className="text-gray-400">
              I'm really impressed with the customer service I received from
              this site. When I had a question about the action figure toy I
              wanted to purchase, their support team responded promptly and
              provided me with all the information I needed. It's refreshing to
              find a company that values its customers
            </Typography>
          </CardBody>
        </Card>
      </Marquee>
    </div>
  );
}
