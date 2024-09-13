import type { setLocale } from 'yup'

type LocalObject = Parameters<typeof setLocale>[0]

const mixed: LocalObject['mixed'] = {
  default: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập giá trị hợp lệ`,
  required: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Trường này là bắt buộc`,
  oneOf: ({ label, values }: { label: string; values: unknown }) =>
    `${
      label ? `${label}: ` : ''
    }Vui lòng nhập một trong các giá trị sau: ${values}`,
  notOneOf: ({ label, values }: { label: string; values: unknown }) =>
    `${
      label ? `${label}: ` : ''
    }Vui lòng không nhập giá trị trong danh sách sau: ${values}`,
  // Từ góc nhìn của người dùng, "defined" và "default" về cơ bản là giống nhau.
  defined: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập giá trị`,
}

const string: LocalObject['string'] = {
  length: ({ label, length }: { label: string; length: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập ${length} ký tự`,
  min: ({ label, min }: { label: string; min: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập ít nhất ${min} ký tự`,
  max: ({ label, max }: { label: string; max: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng không nhập quá ${max} ký tự`,
  matches: ({ label, regex }: { label: string; regex: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập đúng định dạng: ${regex}`,
  email: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập địa chỉ email hợp lệ`,
  url: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập địa chỉ URL hợp lệ`,
  uuid: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập UUID hợp lệ`,
  trim: ({ label }: { label: string }) =>
    `${
      label ? `${label}: ` : ''
    }Vui lòng loại bỏ khoảng trắng ở đầu và cuối chuỗi`,
  lowercase: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng chỉ nhập chữ thường`,
  uppercase: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng chỉ nhập chữ hoa`,
}

const number: LocalObject['number'] = {
  min: ({ label, min }: { label: string; min: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập số lớn hơn hoặc bằng ${Number(
      min,
    ).toLocaleString()}`,
  max: ({ label, max }: { label: string; max: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập số nhỏ hơn hoặc bằng ${Number(
      max,
    ).toLocaleString()}`,
  lessThan: ({ label, less }: { label: string; less: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập số nhỏ hơn ${Number(
      less,
    ).toLocaleString()}`,
  moreThan: ({ label, more }: { label: string; more: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập số lớn hơn ${Number(
      more,
    ).toLocaleString()}`,
  positive: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập số dương`,
  negative: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập số âm`,
  integer: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập số nguyên`,
}

// Để định dạng ngày tháng, bạn có thể sử dụng đối số thứ hai của yup.date().min/max.
const date: LocalObject['date'] = {
  min: ({ label, min }: { label: string; min: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập ngày sau ngày ${min}`,
  max: ({ label, max }: { label: string; max: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập ngày trước ngày ${max}`,
}

const object: LocalObject['object'] = {
  // Không có cách để mô tả thông báo "noUnknown" một cách hợp lý, đúng không?
  noUnknown: ({ label }: { label: string }) =>
    `${label ? `${label}: ` : ''}Không thể nhập các khóa không được đăng ký`,
}

const array: LocalObject['array'] = {
  min: ({ label, min }: { label: string; min: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng nhập ít nhất ${min} mục`,
  max: ({ label, max }: { label: string; max: unknown }) =>
    `${label ? `${label}: ` : ''}Vui lòng không nhập quá ${max} mục`,
}

export const vi: LocalObject = {
  mixed,
  string,
  number,
  date,
  object,
  array,
}
