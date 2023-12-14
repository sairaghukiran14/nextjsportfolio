import Project from "@/Components/projects/page";
import { Snippet } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/modal";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
const page = () => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="homepage_section  justify-between p-4 ">
      <div className="homepage_content_section flex flex-col justify-between w-full h-full border rounded-lg p-4">
        <div className="homepage_nav flex justify-between items-center py-2 px-4">
          <div className="leftnav flex justify-between items-center gap-2">
            <div className="circle w-5 h-5 bg-blue-500 rounded-full"></div>
            <div className="logo_name font-semibold text-xl">asrk</div>
          </div>
          <div className="midnav flex gap-6 items-center ">
            <div className="home">Home</div>
            <div className="about">About me</div>
            <div className="projects">Projects</div>
          </div>
          <div className="rightnav flex items-center gap-3 font-semibold">
            <Button
              // onPress={onOpen}
              color="primary"
              className="text-white font-semibold"
            >
              Contact me
            </Button>
          </div>
        </div>
        <div className="homepage_showcase_section flex items-center justify-center -mt-6 ">
          <div className="showcaseleft-top flex flex-col items-center justify-center gap-3  p-4 text-white rounded-lg w-[60%]">
            <h1 className="text-5xl font-semibold">
              Hello there👋! I'm Raghu Kiran
            </h1>
            <h1 className=" text-4xl bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold tracking-wider text-center">
              Frontend Developer
            </h1>
            <h2 className="text-sm text-center ">
              A Passionate frontend developer with a keen eye for design and a
              love for clean, efficient code, I specialize in bringing concepts
              to life through intuitive and responsive user interfaces.
            </h2>
            <Snippet color="primary">avulasairaghukiran1998@gmail.com</Snippet>
          </div>
        </div>
        <div className="homepage_footer_links w-full flex justify-center items-center">
          <div className="links flex items-center h-15 gap-3">
            <a href="https://www.linkedin.com/in/sai-raghu-kiran-avula-8a2598250/">
              <img
                src="assets/linkedin1.svg"
                alt=""
                className="w-12 h-12 cursor-pointer"
              />
            </a>

            <a href="https://github.com/sairaghukiran14">
              <img
                src="assets/github.svg"
                alt=""
                className="w-10 h-10 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Model */}
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
};

export default page;
