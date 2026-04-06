"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { contactSchema } from "../schemas/contact.schema";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export type ContactFormData = z.infer<typeof contactSchema>;

const labelClass =
  "font-mono gap-0 text-[13px] leading-[120%] tracking-[1px] uppercase font-light text-earth mb-2";

const inputClass =
  "w-full rounded-none border border-coffee/20 bg-transparent px-3 py-5 font-sans  text-coffee outline-none transition-colors";

const errorClass =
  "text-clementine font-mono uppercase tracking-[1px] text-[12px]";

export const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      country: "",
      state: "",
      city: "",
      contactMethod: "",
      hearAboutUs: "",
      investableAssets: "",
      message: "",
    },
  });

  const { handleSubmit, control, formState } = form;

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
  };

  if (formState.isSubmitSuccessful) {
    return (
      <div className="flex flex-col gap-4 pt-8">
        <p className="font-mono text-[13px] tracking-[1px] uppercase text-clementine">
          Request Received
        </p>
        <p className="font-heading text-[22px] text-coffee leading-[130%]">
          We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <FieldGroup>
        <div className="flex gap-4">
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="flex-1" data-invalid={fieldState.invalid}>
                <FieldLabel className={labelClass}>
                  First Name<span className="text-clementine">*</span>
                </FieldLabel>
                <Input
                  {...field}
                  placeholder="John"
                  className={cn(inputClass)}
                />
                {fieldState.invalid && (
                  <FieldError
                    className={errorClass}
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="flex-1" data-invalid={fieldState.invalid}>
                <FieldLabel className={labelClass}>
                  Last Name<span className="text-clementine">*</span>
                </FieldLabel>
                <Input
                  {...field}
                  placeholder="Doe"
                  className={cn(inputClass)}
                />
                {fieldState.invalid && (
                  <FieldError
                    className={errorClass}
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className={labelClass}>
                Email<span className="text-clementine">*</span>
              </FieldLabel>
              <Input {...field} type="email" className={cn(inputClass)} />
              {fieldState.invalid && (
                <FieldError
                  className={errorClass}
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <Field>
              <FieldLabel className={labelClass}>Mobile Number</FieldLabel>
              <Input {...field} type="tel" className={cn(inputClass)} />
            </Field>
          )}
        />

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Field>
              <FieldLabel className={labelClass}>Country</FieldLabel>
              <Input {...field} className={cn(inputClass)} />
            </Field>
          )}
        />

        <div className="flex gap-4">
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Field className="flex-1">
                <FieldLabel className={labelClass}>State</FieldLabel>
                <Input {...field} className={cn(inputClass)} />
              </Field>
            )}
          />

          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Field className="flex-1">
                <FieldLabel className={labelClass}>City</FieldLabel>
                <Input {...field} className={cn(inputClass)} />
              </Field>
            )}
          />
        </div>

        <Controller
          name="contactMethod"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className={labelClass}>
                Preferred Method of Contact
                <span className="text-clementine">*</span>
              </FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  className={cn(
                    inputClass,
                    !field.value && "[&>span]:text-earth/50",
                  )}
                >
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-paper border border-coffee/20 rounded-none shadow-none">
                  {["Email", "Phone", "WhatsApp"].map((o) => (
                    <SelectItem
                      key={o}
                      value={o}
                      className="font-sans font-light text-[15px] text-coffee focus:bg-olive focus:text-coffee rounded-none cursor-pointer"
                    >
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && (
                <FieldError
                  className={errorClass}
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Controller
          name="hearAboutUs"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className={labelClass}>
                How Did You Hear About Us?
                <span className="text-clementine">*</span>
              </FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  className={cn(
                    inputClass,
                    !field.value && "[&>span]:text-earth/50",
                  )}
                >
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-paper border border-coffee/20 rounded-none shadow-none">
                  {[
                    "Referral",
                    "Search Engine",
                    "Social Media",
                    "Press",
                    "Other",
                  ].map((o) => (
                    <SelectItem
                      key={o}
                      value={o}
                      className="font-sans font-light text-[15px] text-coffee focus:bg-olive focus:text-coffee rounded-none cursor-pointer"
                    >
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && (
                <FieldError
                  className={errorClass}
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Controller
          name="investableAssets"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className={labelClass}>
                Investable Assets Range
                <span className="text-clementine">*</span>
              </FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  className={cn(
                    inputClass,
                    !field.value && "[&>span]:text-earth/50",
                  )}
                >
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-paper border border-coffee/20 rounded-none shadow-none">
                  {[
                    "Under $1M",
                    "$1M – $5M",
                    "$5M – $25M",
                    "$25M – $100M",
                    "Over $100M",
                  ].map((o) => (
                    <SelectItem
                      key={o}
                      value={o}
                      className="font-sans font-light text-[15px] text-coffee focus:bg-olive focus:text-coffee rounded-none cursor-pointer"
                    >
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && (
                <FieldError
                  className={errorClass}
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Field>
              <FieldLabel className={labelClass}>Message</FieldLabel>
              <Textarea
                {...field}
                rows={5}
                className={cn(inputClass, "resize-none min-h-[120px]")}
              />
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        type="submit"
        disabled={formState.isSubmitting}
        className="rounded-none w-full bg-coffee text-paper font-sans font-light text-[16px] py-5 hover:opacity-80 disabled:opacity-50"
      >
        {formState.isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
};
