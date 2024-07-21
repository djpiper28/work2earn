"use client";
import{
    Button, Details, Fieldset,  Heading,
    Input,  Label,   LabelText, Paragraph, TextArea,
} from "govuk-react";

export default function Page() {
  return (
    <>
      <Heading level={1}>Post a Job</Heading>
      <Details summary="Legal disclaimer">
        <Paragraph>
          Terms and confitions apply, your first born child, your mother&apo;s
          left kidney and your soul will be taken as payment. Furthermore you
          will be required to work for 1000 years in the afterlife. All rights
          reserved. Copyright 1066AD (c).
        </Paragraph>
      </Details>

      <Paragraph>
        Please fill in the form below to post a job. Your job will be reviewed
        by our team before it is published. Please do not include any personal
        information, such as your address or phone number. You can include your
        email address if you would like to be contacted by email.
      </Paragraph>

      <Fieldset>
        <Label>
          <LabelText name="job-name">Job name</LabelText>
          <Input name="job-name" />
        </Label>
            <TextArea
              mb={8}
              hint="For example: I need someone to paint my house."
              input={{
                value: "",
                name: 'description',
              }}
            >
              Description of what you saw
            </TextArea>
        <Label>
          <LabelText name="job-location">Job location</LabelText>
          <Input name="job-location" />
        </Label>
      </Fieldset>
      <Button type="submit">Post job</Button>
    </>
  );
}
